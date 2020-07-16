import React from "react";
import { Button, Tabs, Tab } from "carbon-components-react";

const props = {
  tabs: {
    selected: 0,
    triggerHref: "#",
    role: "navigation",
  },
  tab: {
    href: "#",
    role: "presentation",
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <h1 className="landing-page__heading">involveMe</h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="About">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      What is involveMe?
                    </h2>
                    <p className="landing-page__p">
                      <strong>involveMe</strong> is an interactive and intuitive
                      way to get in the the know about your state legislators,
                      including their basic info and bills that they have
                      written or sponsored. <br></br>
                      <br></br>
                      <strong>involveMe</strong> had one key goal: to inform
                      individuals about what their legislators are doing to help
                      bring awareness to the racial issues stil currently facing
                      diverse communities and how they are solving them.
                      <br></br>
                      <br></br>
                      The platform also offers basic information about their
                      legislators in order to make it extremely simple of
                      everyone to get involved. Click the blue chat button in
                      the bottom-right to start learning about your
                      congressional leaders -->
                    </p>
                    <Button href="https://www.ibm.org/responsibility/2019/case-studies/embrace">
                      Learn more
                    </Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8"></div>
                </div>
              </div>
            </Tab>
            {/* <Tab {...props.tab} label="W">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16 landing-page__p">
                    Quickly access data on your state legislators. involveMe
                    helps you skip the hassle of finding out all of the
                    important info about your legislator.
                  </div>
                </div>
              </div>
            </Tab> */}
            {/* <Tab {...props.tab} label="Emb(race)">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16 landing-page__p">
                    involveMe stems off of IBM's effort for racial
                    reconciliation program, Emb(race). Our platform aims to not
                    only get you easily in contact with your state legislators,
                    but also to let you know what they are doing to help fix the
                    present racial issues.
                  </div>
                </div>
              </div>
            </Tab> */}
            <Tab {...props.tab} label="Emb(race)">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      What is Emb(race)
                    </h2>
                    <p className="landing-page__p">
                      <strong>Embrace</strong> is IBM's initiative to stand with
                      the Black community and call for change to ensure racial
                      equality.
                      <br></br>
                      <br></br>
                      Following events that have occured over the last couple
                      months IBMers across the globe have committed their time,
                      energy and focus to understanding and solving problems
                      facing African-Americans all around.{" "}
                      <strong>involveMe</strong> is a technological part of this
                      initiative, as it allows individuals to learn specifically
                      about what their legislators are doing to help bring
                      awareness to racial issues today.
                      <br></br>
                      <br></br>
                      The platform also offers basic information about their
                      legislators in order to make it extremely simple of
                      everyone to get involved.
                    </p>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8"></div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
