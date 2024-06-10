import React, { useState } from 'react'
import './FormStudent.css'
import { useForm } from 'react-hook-form'

export const FormStudent = () => {

    const { register, handleSubmit, reset } = useForm()

    const [student, setStudent] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const submitHandler = (data) => {
        console.log(data)

        const totalMarks = parseInt(data.frontend) + parseInt(data.backend) + parseInt(data.database) + parseInt(data.devops) + parseInt(data.appdev)
        console.log("total : " + totalMarks)

        const percentage = (totalMarks / 500) * 100
        console.log("percentage : " + percentage)

        setStudent({ ...data, totalMarks, percentage })
        setIsSubmit(true)
    }

    return (
        <div>
            <div id="main">
                {
                    // isSubmit == false && 
                    <form className='form' onSubmit={handleSubmit(submitHandler)}>
                        <div id="info">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Name :</th>
                                        <td>
                                            <input type='text' {...register('name')} />
                                        </td>
                                        <th>Roll No : </th>
                                        <td>
                                            <input type='number' {...register('roll')} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Date of Birth :</th>
                                        <td>
                                            <input type='date' {...register('dob')} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div id="mark">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>SR. NO.</th>
                                        <th>SUBJECT NAME</th>
                                        <th>PASSING MARKS</th>
                                        <th>MARK OBTAINED</th>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>FRONT-END DEVELOPMENT</td>
                                        <td>100/35</td>
                                        <th>
                                            <input type='number' {...register('frontend')} />
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>BACK-END DEVELOPMENT</td>
                                        <td>100/35</td>
                                        <th>
                                            <input type='number' {...register('backend')} />
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>DATA BASE</td>
                                        <td>100/35</td>
                                        <th>
                                            <input type='number' {...register('database')} />
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>DEVOPS</td>
                                        <td>100/35</td>
                                        <th>
                                            <input type='number' {...register('devops')} />
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td>MOBILE APP DEV</td>
                                        <td>100/35</td>
                                        <th>
                                            <input type='nmuber' {...register('appdev')} />
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <input type='submit' value='submit' />
                        <input className='submit' type='reset' value='Reset' onClick={() => reset()} />
                    </form>
                }
            </div>

            {
                isSubmit && <div id="main1">
                    <div id="info">
                        <form className='form' onSubmit={handleSubmit(submitHandler)}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Name : {student.name}</th>
                                        <td id="fname1" />
                                        <th>Roll No: {student.roll}</th>
                                        <td id="rollno1" />
                                    </tr>
                                    <tr>
                                        <th>Date of Birth : {student.dob}</th>
                                        <td id="bod1" />
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                    <div id="mark">
                        <table>
                            <tbody>
                                <tr>
                                    <th>SR. NO.</th>
                                    <th>SUBJECT NAME</th>
                                    <th>PASSING MARKS</th>
                                    <th>MARK OBTAINED</th>
                                    <th>GRADE</th>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>FRONT-END DEVELOPMENT</td>
                                    <td>100/35</td>
                                    <th id="fend1">{student.frontend}</th>
                                    <th id="gread1"></th>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>BACK-END DEVELOPMENT</td>
                                    <td>100/35</td>
                                    <th id="bend1">{student.backend}</th>
                                    <th id="gread2" />
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>DATA BASE</td>
                                    <td>100/35</td>
                                    <th id="dbase1">{student.database}</th>
                                    <th id="gread3" />
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>DEVOPS</td>
                                    <td>100/35</td>
                                    <th id="devops1">{student.devops}</th>
                                    <th id="gread4" />
                                </tr>
                                <tr>
                                    <td>5.</td>
                                    <td>MOBILE APP DEV</td>
                                    <td>100/35</td>
                                    <th id="mobile1">{student.appdev}</th>
                                    <th id="gread5" />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="result">
                        <table>
                            <tbody>
                                <tr>
                                    <th>TOTAL :</th>
                                    <td id="total1">{student.totalMarks}</td>
                                </tr>
                                <tr>
                                    <th>PERCENTAGE :</th>
                                    <td id="per1">{student.percentage.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <th>GRADE :</th>
                                    <td id="grade" />
                                </tr>
                                <tr>
                                    <th>PASS/FAIL :</th>
                                    <td id="pf" />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div >
    )
}
