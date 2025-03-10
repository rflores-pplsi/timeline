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
          <ul>
            <li>
              <strong>514</strong> - Built LSUS footer link automation
            </li>
            Social, Apps, CTA logic and closure of marketing pop-ups. Began Playwright to New Relic reporting.
          </ul>
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
          <ul className="left-align">
            <li>
              <strong>524</strong> - Added Safari Desktop as Testing Browser
            </li>
            <li>
              <strong>528</strong> - Create Custom New Relic Reporter
            </li>
            <li>
              <strong>529</strong> - Build First Iteration of of New Relic Dashboard for QAOPS
            </li>
            <li>
              <strong>531</strong> - Testing BuyNow on Production - release 1/31/2024
            </li>
            <li>
              <strong>532</strong> - Get a list of all pages on LSUS prod from Rest API for use in datasheet
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="Mar '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">547,552,565</h4>
          <ul className="left-align">
            <li>
              <strong>547</strong> - Find UAT links on Production legalshield.com
            </li>
            <li>
              <strong>552</strong> - LSUS maintenance - daily prod health
            </li>
            <li>
              <strong>565</strong> - Create Automation for all CTA's on GBB
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="May '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">524,528,529,531</h4>
          <ul>
            <li>
              <strong>524</strong> - Added Safari Desktop as Testing Browser
            </li>
            <li>
              <strong>528</strong> - Create Custom New Relic Reporter
            </li>
            <li>
              <strong>529</strong> - Build First Iteration of of New Relic Dashboard for QAOPS
            </li>
            <li>
              <strong>531</strong> - Testing BuyNow on Production - release 1/31/2024
            </li>
            <li>Get a list of all pages on LSUS prod from Rest API for use in datasheet</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="Jun '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">583, 665</h4>
          <ul>
            <li>
              <strong>583</strong> - Create automation new PDLPs
            </li>
            <li>
              <strong>665</strong> - Add initial Playwright and tests to channels-wpcore-plugin
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="Jul '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">674, Begin Webflow Research</h4>
          <ul>
            <li>
              <strong>674</strong> - LSUS UAT: Business Addon Testing (GBB only)
            </li>
            <li>
              <strong>Webflow Setup</strong> - understand structures and schemas from Webflow to begin transition from
              WordPress
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="Aug '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">720, Webflow structuring</h4>
          <ul>
            <li>
              <strong>720</strong> - IDSUS/Webflow: Create Automation for CTA's
            </li>
            <li>
              <strong>Webflow structuring</strong> - Rework the existing WordPress tests to work with Webflow's
              structures
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="Sep '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">753, Manual Testing UAT Webflow</h4>
          <ul>
            <li>
              <strong>753</strong> - LSUS: create initial CTA testing for Webflow Pages
            </li>
            <li>
              <strong>Manual Testing UAT Webflow</strong> - Test all Webflow pages for CTA's
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="Oct '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">
            817, 818, 822, Manual Testing Webflow, New Relic Reporting
          </h4>
          <ul>
            <li>
              <strong>817</strong> - LSUS/Webflow: Create CSV of press post types from PPLSI.com
            </li>
            <li>
              <strong>818</strong> - LSUS/Webflow: Create CSV of all posts after July 31, 2024 from Legalshield.com
            </li>
            <li>
              <strong>822</strong> - LSUS/Webflow: Create Automation for all PDLP's
            </li>
            <li>
              <strong>Manual Testing Webflow</strong> - Test all Webflow pages for CTA's
            </li>
            <li>
              <strong>New Relic Reporting</strong> - Setup the Playwright Reporter to send test data to New Relic
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="Nov '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">858, Manual Testing All Environments Webflow</h4>
          <ul>
            <li>
              <strong>858</strong> - IDSUS/LSUS: Create Automation Testing
            </li>
            <li>
              <strong>Manual Testing Webflow</strong> - Test all Webflow pages (CTA's, Forms, Broken Links, etc)
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(235, 221, 248)", color: "#222" }}
          date="Dec '24"
          iconStyle={{ background: "rgb(81, 28, 135)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">QAOPS Test Automation</h3>
          <h4 className="vertical-timeline-element-subtitle">Manual Testing, Squad restructuring collaborations</h4>
          <ul>
            <li>
              <strong>Manual Testing Webflow</strong> - Test all Webflow pages for CTA's
            </li>
            <li>
              <strong>Sqaud Restructuring</strong> - Collaborate with co-workers to ensure company direction is being
              satisfied with development of QA squad
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default App;
