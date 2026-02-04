import Bleed from "./Components/Bleed/Bleed";
import Course from "./Components/Course/Course";
import Educore from "./Components/Educore/Educore";
import HeroPage from "./Components/Hero/Hero";
import Instructor from "./Components/Meet/Meet";
import CourseOverview from "./Components/Module/Module";
import Nav from "./Components/Nav/Nav";
import Reviews from "./Components/Reviews/Reviews";

export default function App() {
  return (
    <div>
      <div className="bg-black py-20">
        <Nav />
        <HeroPage />
      </div>
      <Bleed />
      <Course />
      <Educore />
      <CourseOverview />
      <Reviews />
      <Instructor />
    </div>
  );
}
