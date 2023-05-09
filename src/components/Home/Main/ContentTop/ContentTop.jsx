import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { Container, ThemeProvider } from "@mui/material";
import theme from "../../../../styles/Theme";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

import useContentTopStyles from "../../../../styles/ContentTop";
import cardimgone from "../../../../assets/4300_7_03.jpg";
import cardimgtwo from "../../../../assets/3569284.jpg";
import cardimgthree from "../../../../assets/5751386.jpg";
import securedata from "../../../../assets/Data_security_28.jpg";
import securedpayment from "../../../../assets/online-payment-security-concept-3d-phone-bill.jpg";
import privacy from "../../../../assets/6101100.jpg";
import encrypttion from "../../../../assets/5051408.jpg";

function ContentTop() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [expanded1, setExpanded1] = React.useState(false);
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const [expanded2, setExpanded2] = React.useState(false);
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const contentTopClasses = useContentTopStyles();

  return (
    <section className={contentTopClasses.section}>
      <Fade left>
        <div className={contentTopClasses.firstdiv}>
          <Typography
            variant="h3"
            align="center"
            textAlign="center"
            sx={{ fontFamily: "Arial", color: "#002244", fontWeight: 1000 }}
          >
            Explore endless possiblities with Trade View
          </Typography>
          <Container
            sx={{
              // width: "350",
              display: "flex",
              justifyContent: "space-around",
              justifyItems: "center",
              alignItems: "center",
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            <Card
              sx={{
                marginRight: 5,
                width: "200vh",
                height: 650,
                "&:hover": {
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                },
              }}
              onMouseEnter={handleExpandClick1}
              onMouseLeave={handleExpandClick1}
            >
              <CardHeader />
              <CardMedia component="img" height="300" image={cardimgone} />
              <CardContent>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">Learn with Trade View</Typography>
                </ThemeProvider>
                <Typography variant="body2" color="text.secondary">
                  TradeView is the ultimate platform for anyone looking to learn
                  about trading. With its comprehensive resources, including
                  up-to-date news, analysis, and expert insights on forex,
                  cryptocurrency, and the stock market, you'll have everything
                  you need to get started and succeed in trading.
                </Typography>
              </CardContent>
              <Collapse in={expanded1} timeout="auto" unmountOnExit>
                <CardContent>
                  <Link className={contentTopClasses.firstcardlinks}>
                    Learn More
                  </Link>
                </CardContent>
              </Collapse>
            </Card>

            <Card
              sx={{
                width: "200vh",
                marginRight: 5,
                height: 650,
                "&:hover": {
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                },
              }}
              onMouseEnter={handleExpandClick}
              onMouseLeave={handleExpandClick}
            >
              <CardHeader />
              <CardContent>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">Grow with Trade View</Typography>
                </ThemeProvider>
                <Typography variant="body2" color="text.secondary">
                  Our platform provides traders and investors with advanced
                  tools to track, analyze and monitor their investments. With
                  TradeView, you can stay up-to-date with the latest market
                  trends, analyze historical data, and make informed investment
                  decisions.
                </Typography>
              </CardContent>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Link className={contentTopClasses.firstcardlinks}>
                    Learn More
                  </Link>
                </CardContent>
              </Collapse>
              <CardMedia
                component="img"
                height="300"
                image={cardimgtwo}
                width="50"
              />
            </Card>

            <Card
              sx={{
                marginRight: 5,
                width: "200vh",
                height: 650,
                "&:hover": {
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                },
              }}
              onMouseEnter={handleExpandClick2}
              onMouseLeave={handleExpandClick2}
            >
              <CardHeader />
              <CardMedia component="img" height="300" image={cardimgthree} />
              <CardContent>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">
                    Dive into endless opportunities
                  </Typography>
                </ThemeProvider>
                <Typography variant="body2" color="text.secondary">
                  With TradeView, you can dive into the world of trading and
                  unlock your potential for financial growth.
                </Typography>
              </CardContent>
              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                  <Link className={contentTopClasses.firstcardlinks}>
                    Learn More
                  </Link>
                </CardContent>
              </Collapse>
            </Card>
          </Container>
        </div>
      </Fade>
      <Fade right>
        <div className={contentTopClasses.seconddiv}>
          <div className={contentTopClasses.secondivtitle}>
            <div>
              <Typography
                variant="h3"
                sx={{ fontFamily: "Arial", color: "#002244", fontWeight: 1000 }}
              >
                Trusted Market Tracker
              </Typography>
              <Link className={contentTopClasses.secondivlink}>Learn More</Link>
            </div>
            <div className={contentTopClasses.securecontentdiv}>
              <div className={contentTopClasses.secondivimg}>
                <img
                  alt="secure"
                  src={securedata}
                  className={contentTopClasses.secureimg}
                />
              </div>

              <div>
                <div className={contentTopClasses.secondivsecurity}>
                  <Card
                    sx={{
                      width: 600,
                      height: "180px",
                      border: "0px solid white",
                      display: "flex",
                      alignItems: "center",
                    }}
                    elevation={0}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={securedpayment}
                      alt="payment"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Secured Payment
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Our website ensures secure payment methods to protect
                        your financial information and give you peace of mind
                        while making transactions.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div className={contentTopClasses.secondivsecurity}>
                  <Card
                    sx={{
                      width: 600,
                      height: "180px",
                      border: "0px solid white",
                      display: "flex",
                      alignItems: "center",
                    }}
                    elevation={0}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={privacy}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        We value your Privacy
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        TradeView takes your privacy seriously. We use
                        industry-standard security measures to protect your
                        personal information and ensure that it is not shared
                        with any third parties.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div className={contentTopClasses.secondivsecurity}>
                  <Card
                    sx={{
                      width: 600,
                      height: "180px",
                      border: "0px solid white",
                      display: "flex",
                      alignItems: "center",
                    }}
                    elevation={0}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={encrypttion}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Data Encryption
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        TradeView prioritizes the protection of our users' data
                        and implements strong encryption methods to ensure the
                        confidentiality and integrity of all information shared
                        on our platform.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default ContentTop;
