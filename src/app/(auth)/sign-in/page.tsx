"use client";

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  rememberMe: z.boolean().default(false).optional(),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      console.log("Auth base URL:", process.env.NEXT_PUBLIC_BETTER_AUTH_URL);

      const { error } = await authClient.signIn.email(
        {
          email: values.email,

          password: values.password,

          callbackURL: "/",
          /**
           * remember the user session after the browser is closed.
          @default true
           */
          rememberMe: false,
        },
        {
          //callbacks
        }
      );
      if (error) {
        toast.error(error.message || "Sign in Failed. Please try again.");
        setIsLoading(false);
        return;
      }
      toast.success("Signed in successfully. Redirecting....");
      setIsLoading(false);
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full max-w-md">
        {/* Hotel Logo/Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg"
            alt="Hotel Logo"
            className="h-24 w-24 object-fill rounded-full "
            width={200}
            height={200}
          />
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome to Our Hotel
        </h2>
        <p className="text-sm sm:text-base text-center text-gray-600 mb-8">
          welcome back! please enter your details
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {" "}
            {/* Adjusted spacing */}
            {/* Email Input Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-gray-700 text-sm font-medium mb-2">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <Input
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out text-gray-800"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Password Input Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-gray-700 text-sm font-medium mb-2">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out text-gray-800"
                        {...field}
                      />
                      <Button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Remember Me & Forgot Password */}
            {/* <div className="flex justify-between items-center mb-6">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-gray-700 cursor-pointer">
                        Remember for month
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div> */}
            {/* Log In Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 disabled:bg-blue-400 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {isLoading ? "Logging You in..." : "Login"}
            </Button>
          </form>
        </Form>

        {/* Or Log In With Separator */}
        <div className="relative flex items-center justify-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm">
            or log in with
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button
            type="button"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 shadow-sm hover:bg-gray-50 transition duration-200 ease-in-out"
            aria-label="Log in with Google"
          >
            <FcGoogle size={24} />
          </Button>
          <Button
            type="button"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 shadow-sm hover:bg-gray-50 transition duration-200 ease-in-out"
            aria-label="Log in with Facebook"
          >
            <FaFacebookF size={24} />
          </Button>
          <Button
            type="button"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 shadow-sm hover:bg-gray-50 transition duration-200 ease-in-out"
            aria-label="Log in with Apple"
          >
            <FaApple size={24} />
          </Button>
        </div>

        {/* Don't Have an Account? Sign Up */}
        <p className="text-center text-gray-700 text-sm sm:text-base">
          Don&apos;t have an account?{" "}
          <Link
            href="sign-up"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
