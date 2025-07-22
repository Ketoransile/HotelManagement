"use client";
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
// import { connectDB } from "@/lib/connectDB";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { MdPerson } from "react-icons/md";

const formSchema = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    username: z.string().min(3, {
      message: "Username must be at least 3 characters",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

const Singup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Define the onSubmit function
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const { error } = await authClient.signUp.email(
        {
          email: values.email,
          password: values.password,
          name: values.username,
          callbackURL: "/",
        },
        {
          onRequest: () => {
            toast.success("Processing your signup...");
          },
          onSuccess: () => {
            router.push("/");
            toast.success("Account created successfully! ");
          },
          onError: (ctx) => {
            console.log("Full error context:", ctx);

            const errorMessage =
              ctx.error?.message ||
              ctx.error?.toString() ||
              "Signup failed. Please try again.";

            toast.error(errorMessage);
          },
        }
      );

      if (error) {
        throw new Error(error.message || "Signup failed");
      }
    } catch (err) {
      let errorMessage = "An unexpected error occurred";
      if (typeof err === "object" && err !== null && "message" in err) {
        errorMessage = (err as { message: string }).message;
      } else if (typeof err === "string") {
        errorMessage = err;
      }
      toast.error(errorMessage);
      console.error("Signup error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full max-w-md">
        {/* Hotel Logo/Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg" // Using the image URL from your Login component
            alt="Hotel Logo"
            className="h-24 w-24 object-fill rounded-full"
            width={200}
            height={200}
          />
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
          Create Your Account
        </h2>
        <p className="text-sm sm:text-base text-center text-gray-600 mb-8">
          Join us! Please enter your details to sign up.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            {/* Username input field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-gray-700 text-sm font-medium mb-2">
                    Username
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MdPerson
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <Input
                        placeholder="Enter your name"
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

            {/* Confirm Password Input Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-gray-700 text-sm font-medium mb-2">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out text-gray-800"
                        {...field}
                      />
                      <Button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                      >
                        {showConfirmPassword ? (
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

            {/* Sign Up Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 disabled:bg-blue-400 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "
            >
              {isLoading ? "Signing you up" : "Sign Up"}
            </Button>
          </form>
        </Form>

        {/* Or Sign Up With Separator */}
        <div className="relative flex items-center justify-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm">
            or sign up with
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button
            type="button"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 shadow-sm hover:bg-gray-50 transition duration-200 ease-in-out"
            aria-label="Sign up with Google"
          >
            <FcGoogle size={24} /> {/* Using FcGoogle icon */}
          </Button>
          <Button
            type="button"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 shadow-sm hover:bg-gray-50 transition duration-200 ease-in-out"
            aria-label="Sign up with Facebook"
          >
            <FaFacebookF size={24} /> {/* Using FaFacebookF icon */}
          </Button>
          <Button
            type="button"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 shadow-sm hover:bg-gray-50 transition duration-200 ease-in-out"
            aria-label="Sign up with Apple"
          >
            <FaApple size={24} /> {/* Using FaApple icon */}
          </Button>
        </div>

        {/* Already Have an Account? Log In */}
        <p className="text-center text-gray-700 text-sm sm:text-base">
          Already have an account?{" "}
          <Link
            href="sign-in"
            className="text-blue-600 hover:underline font-medium"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Singup;
