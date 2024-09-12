import logo from "./lsus-logo.svg";
import "./App.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tasks timeline for QAOPS Test Automation completed by Ray Flores.</p>
      </header>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(235, 221, 248)" }}
          date="Jan '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#222" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">514,515,518,519,520</h4>
          <p>
            Built LSUS footer link automation, Social, Apps, CTA logic and closure of marketing pop-ups. Began
            Playwright to New Relic reporting.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(221, 221, 221)" }}
          date="Feb '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">524,528,529,531,532</h4>
          <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="Mar '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="May '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="Jun '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="Jul '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="Aug '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="Sep '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
}

export default App;
