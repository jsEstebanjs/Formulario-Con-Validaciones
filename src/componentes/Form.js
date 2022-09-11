import React from "react";
import { useForm } from "react-hook-form";
import './Form.css'

const Form = ()=>{
    const {register,handleSubmit,formState: { errors }} = useForm();
    const onSubmit=(data)=>{
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name'>Full name</label>
                <input className={errors.name?'red':null} type='text' name='' id='name' placeholder='Your name' {...register('name',{
                    required:true,
                    minLength:10,
                    maxLength:30,
                    pattern:/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/
                })}/>
                {errors.name?.type === 'required' && <p>This field is required</p>}
                {errors.name?.type === 'pattern' && <p>invalid name(the first letter must be capitalized)</p>}
                {errors.name?.type === 'minLength' && <p>minimum length 10</p>}
                {errors.name?.type === 'maxLength' && <p>maximum length 30</p>}
                <label htmlFor='age'>Age</label>
                <input className={errors.age?'red':null} type='number' name='' id='age' placeholder='Your age' {...register('age',{
                    required:true,
                    min:18,
                    max:99,
                    pattern:/^[0-9]+$/i

                })}/>
                {errors.age?.type === 'required' && <p>This field is required</p>}
                {errors.age?.type === 'min' && <p>valid age of 18-99 years</p>}
                {errors.age?.type === 'max' && <p>valid age of 18-99 years</p>}

                <label htmlFor='email'>Email</label>
                <input className={errors.email?'red':null} type='email' name='' id='email' placeholder='Your email' {...register('email',{
                    required:true,
                    pattern:/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
                    ,
                })}/>
                {errors.email?.type === 'required' && <p>This field is required</p>}
                {errors.email?.type === 'pattern' && <p>invalid email</p>}

                <label htmlFor='password'>Password</label>
                <input className={errors.password?'red':null} type='password' name='' id='password' placeholder='Your password' {...register('password',{
                    required:true,
                    minLength:8,
                    maxLength:16,
                })}/>
                {errors.password?.type === 'required' && <p>This field is required</p>}
                {errors.password?.type === 'minLength' && <p>minimum 8 characters</p>}
                {errors.password?.type === 'maxLength' && <p>maximum 16 characters</p>}

                <label htmlFor='Gender'>Gender</label>
                <select {...register('gender')}>
                    <option value='masculine'>Masculine</option>
                    <option value='female'>Female</option>
                </select>


                <input type='submit' value='Create User'className='btn-sent'/>
            </form>
        </div>
    )
}

export default Form;