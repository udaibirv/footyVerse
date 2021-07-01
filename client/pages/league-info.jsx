import React from 'react';

export default class LeagueInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container-fluid league-container background-image">
        <h5 className="header text-center">Which league would you like to follow?</h5>
          <div className="row mb-4">
              <div className="col-12 col-md-6 col-lg-4">
                  <div className="card league-card mb-4">
                    <img className="card-img-top" src="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2016/08/pl_launch_web_assets-02.jpg"></img>
                    <div className="card-body">
                      <h5 className="card-title ">England</h5>
                      <p className="card-text">The Premier League is England's top flight division. With the highest television contracts in world football, the Premier League is considered
                to be one of the most exciting leagues in the world due to the heavy influx of money. England's most successful team is Liverpool FC who have won 48 major trophies  since the club was founded in 1892. Other successful teams include Manchester United, Chelsea, Manchester City,
                and Arsenal FC.
                      </p>
                      <a href="#england" className="text-center">League Info</a>
                    </div>
                  </div>
              </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card league-card mb-4">
                <img className="card-img-top" src="https://www.logofootball.net/wp-content/uploads/bundesliga-logo.png"></img>
                <div className="card-body">
                  <h5 className="card-title ">Germany</h5>
                  <p>Bundesliga is Germany's top flight division and was established in 1963. Without a doubt the most dominant team in Germany is FC Bayern Munich, winning the league title 30 times.
                Also considered a colossus on the European stage, Bayern Munich often run away with the league. However despite the dominance by the club for the past 8 seasons, other notable teams include
                bitter rivals Borussia Dortmund, FC Shalke, and RB Leipzig.
                  </p>
                <a href="#germany">League Info</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card league-card">
                <img className="card-img-top" src="data:image/jpeg;base64,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"></img>
                <div className="card-body">
                  <h5 className="card-title ">Italy</h5>
                  <p>Serie A is Italy's top flight division and began in 1923. Italy's most successful club is Juventus who won a total of 70 major honors since the club was founded in 1897.
                Juventus' league dominance ended in the 20/21 season with rival Inter Milan won the Scudetto, or league title, and broke the 8 year streak of Juventus running away with the league.
                Some of the other massive clubs in Italy include European Giants AC Milan, Roma, and Lazio.
                  </p>
                  <a href="#italy">League Info</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card league-card">
                <img className="card-img-top" src="https://logodownload.org/wp-content/uploads/2019/09/ligue-1-logo-2.png"></img>
                <div className="card-body">
                  <h5 className="card-title">France</h5>
                  <p>Ligue 1 is France's top flight division and was formed in 1932. France's most successful club is Saint-Etienne, winning the league title 10 times.
                Closely behind are Olympique de Marseille and PSG who both have 9 league titles to their name, with the former the only french club to win the Champions League.
                Following a recent change of ownership, Paris based club PSG have dominated France winning the league 9 years in a row, while bringing in some of the most sought after players
                in world football.
                  </p>
                  <a href="#france">League Info</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card league-card">
                <img className="card-img-top" src="https://i1.wp.com/www.logofootball.net/wp-content/uploads/La-Liga-Logo.png?resize=350%2C200&ssl=1"></img>
                <div className="card-body">
                  <h5 className="card-title ">Spain</h5>
                  <p>La Liga is Spain's top flight division and is home to some of the most exciting football in the world. As a whole, Spain's style of play revolves around
                sound fundamentals, and a strong foundation of passing which results in an aesthetically pleasing way to enjoy the beautiful game. La Liga is the home of
                two of the most popular and successful clubs in the world, Real Madrid and FC Barcelona, and their matchups dubbed "El Classico" brings in hundreds of millions of viewers.
                  </p>
                  <a href="#spain">League Info</a>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }

}
