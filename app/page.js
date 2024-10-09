'use client'


import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
   <> 
   <ToastContainer theme="dark"/>
   <Header></Header>
    <BlogList></BlogList>
    <Footer></Footer>
   </>
  );
}
