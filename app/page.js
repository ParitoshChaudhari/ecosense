import React from "react";
import NavBar from "@/Components/Header/NavBar";
import Body from "@/Components/Body/Body";
import Table from "@/Components/Table/Table";
import DetailsInfoCard from "@/Components/Body/DetailInfoCard";
import Footer from "@/Components/Footer/Footer";
import FAQ from "@/Components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <NavBar />
      <Body />
      <Table />
      <DetailsInfoCard />
      <FAQ />
      <Footer />
    </>
  );
}
