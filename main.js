import navigation from "./src/scripts/navigation";
import roleTabs from "./src/scripts/roleTabs";
import projects from "./src/scripts/projects";
import intersections from "./src/scripts/intersections";
import contacts from "./src/scripts/contacts";

navigation();
roleTabs();
projects();
contacts();

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach(el => intersections().observe(el));