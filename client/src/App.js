import "./Style/App.css";
import logo from "./assets/books-stack-of-three.svg";
import Form from "./Components/Form";
import Result from "./Components/Results";
import Footer from "./Components/Footer";
// import ParallaxComponents from "./Components/ParallaxComponents";
import Icon from "./assets/active-search.png";
import ParallaxComponents from "./Components/ParallaxComponents";
import { ResultProvider } from "./Contexts/ResultContext";
import { useTransition, animated, config } from "react-spring";
import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import WhoAreYou from "./Components/WhoAreYou";

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql Erorors : ${message}`);
      return path;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3001/graphql" }),
  // new HttpLink({ uri: "http://192.168.2.200:3001/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  const [Toggle, setToggle] = useState(false);
  const [Toggle_2, setToggle_2] = useState(false);
  const [Toggle_3, setToggle_3] = useState(false);

  const fade = useTransition(Toggle, {
    from: { left: -250 },
    enter: { left: 0 },
    leave: { left: -250 },
    config: config.slow,
  });

  const Visibility = {
    display: Toggle ? "flex" : "none",
  };

  return (
    <ApolloProvider client={client}>
      <ResultProvider>
        <div className="App">
          <nav>
            <div className="nav-bar">
              <div className="logo">
                <img
                  src={logo}
                  onMouseEnter={() => {
                    setToggle(!Toggle);
                  }}
                  onMouseLeave={() => {
                    setToggle(!Toggle);
                  }}
                  alt=""
                />
                <div className="SSLE" style={Visibility}>
                  {fade((style, item) =>
                    item ? (
                      <animated.span style={style}>
                        Secondary School Leaving Exam
                      </animated.span>
                    ) : (
                      ""
                    )
                  )}
                </div>

                <span>(SSLE)</span>
              </div>
              <div className="links">
                <button
                  onClick={() => {
                    setToggle_2(false);
                    setToggle_3(false);
                  }}
                >
                  <img src={Icon} /> Search
                </button>
                <a href="#/"> Official Page </a>
                <a href="#/"> Contact Me </a>
              </div>
            </div>
          </nav>

          <main className="main-container">
            <div className="container">
              {!Toggle_2 && !Toggle_3 ? (
                <Form
                  Toggle_2={Toggle_2}
                  setToggle_2={setToggle_2}
                  Toggle_3={Toggle_3}
                  setToggle_3={setToggle_3}
                />
              ) : (
                <></>
              )}

              {/* <ParallaxComponents /> */}

              {Toggle_2 ? <Result /> : <></>}
              {Toggle_3 ? (
                <WhoAreYou
                  Toggle_2={Toggle_2}
                  setToggle_2={setToggle_2}
                  Toggle_3={Toggle_3}
                  setToggle_3={setToggle_3}
                />
              ) : (
                <></>
              )}
            </div>
            <Footer />
          </main>
        </div>
      </ResultProvider>
    </ApolloProvider>
  );
}

export default App;
