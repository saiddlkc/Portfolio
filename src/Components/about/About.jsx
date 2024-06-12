import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import me from "../../assets/portfolio.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Learning</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20 Clients Worldwide</small>
            </article>
          </div>
          <p>
            Ich bin Sait bin 25 Jahre Alt , ein Fullstack-Entwickler mit Sitz in
            Berlin Kreuzberg und brenne dafür, innovative und
            benutzerfreundliche Webanwendungen zu entwickeln. Mit meiner
            Expertise in Frontend- und Backend-Technologien sowie meiner
            Lernbereitschaft und Motivation bin ich bereit, jedes Projekt mit
            Leidenschaft und Engagement anzugehen.Ich bin überzeugt, dass man in
            jedem Lebensbereich etwas lernen kann, und ich bin stets offen für
            neue Erfahrungen.
          </p>
          <a href="#contact" className="btn btn-primary">
            Connect with ME
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
