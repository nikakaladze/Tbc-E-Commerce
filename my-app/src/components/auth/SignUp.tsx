"use client";
import React, { useActionState } from "react";
import Form from "next/form";
import {Loader2} from 'lucide-react'

const initialState = {
  message: "",
};
type SignUpProps = {
  action: (
    prevState: any,
    formData: FormData
  ) => Promise<{ message: string } | undefined>;
};
const SignUp = ({ action }: SignUpProps) => {
  const [state, formAction, isPending] = useActionState(action, initialState);
  return (
    <Form action={formAction} className="w-96 md mx-auto my-16 p-8 rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-2 ">
        Join The Deal Revolution
      </h1>
      <p className=" text-center text-sm text-rose-700 mb-2 font-semibold">
        Limited Offer
      </p>
      <p className=" text-center text-sm text-gray-900 mb-6 font-semibold">
        Sign Up Now and get 90% Dsicount
      </p>
      <div className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Adress
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            className="w-full px-4 py-3 border  border-gray-200 rounded-md focus:ring-2 focus:ring-back focus:border-transparent"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="password"
            required
            className="w-full px-4 py-3 border  border-gray-200 rounded-md focus:ring-2 focus:ring-back focus:border-transparent"
            placeholder="Enter Your Password"
          />
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">
            Only 127 Welcome Bonus packages remaining
          </p>
          <p className="text-xs text-gray-500 mb-2">
                offers expires  in 13:45
          </p>
        </div>
        <button type="submit" disabled={isPending} className={`w-full  bg-rose-600 text-white py-3 rounded-md hover bg-rose-700 flex items-center justify-center gap-2 ${isPending ? 'cursor-not-allowed': ''}`}>
            {isPending ?(
                <React.Fragment>
                    <Loader2 className="animate-spin h-4 w-4"/>
                    Creating Account
                </React.Fragment>
            ): (
                'CREATE ACCOUNT'
            )}
        </button>
      </div>
    </Form>
  );
};

export default SignUp;
