// @ts-nocheck
'use client'

import React, { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const SignIn = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState(null);

  const router = useRouter();

  async function signIn(formData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push('/explore');
      router.refresh();
    }


  }

  useEffect(() => {
    console.log("SignIn component is now client-side.");
  }, []);

  return (
    <div className="w-1/3 mx-auto bg-white p-14 rounded-lg my-20 shadow-md pb-20">
      <img src={'/logo.svg'} className="mx-auto relative top-[-70px] w-[150px]"></img>
      <h2 className="w-full text-center font-medium mt-[-30px] mb-12">Sign In</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={signIn}
      >
        {({ errors, touched }) => (
          <Form className="column w-full">
            <div className='w-full flex column gap-2'>
            <label htmlFor="email">Email</label>
              <Field
                className={cn('input', errors.email && touched.email && 'bg-red-50')}
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
              {errors.email && touched.email ? (
                <div className="text-red-600">{errors.email}</div>
              ) : null}
            </div>

            <div className='w-full flex column gap-2'>
              <label htmlFor="password">Password</label>
              <Field
                className={cn('input', errors.password && touched.password && 'bg-red-50')}
                id="password"
                name="password"
                type="password"
              />
            {errors.password && touched.password ? (
              <div className="text-red-600">{errors.password}</div>
            ) : null}

            </div>

            <Link href="/reset-password" className="link w-full my-2 text-gray-500">
              Forgot your password?
            </Link>

            <button className="bg-blue-500 px-8 py-2 text-white rounded-full w-full mb-4 hover:bg-blue-700 hover:text-white transition-all" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className="text-red-600">{errorMsg}</div>}
      <div className='w-full content-center'>
      <Link href="/sign-up" className="link text-center w-full mx-auto item-center block">
        Don&apos;t have an account? Sign Up.
      </Link>
      </div>
    </div>
  );
};

export default SignIn;
