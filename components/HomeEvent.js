import EventCard from "../components/EventCard";

class HomeEvent extends React.Component {
  render() {
    var today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + "-" + mm + "-" + yyyy;

    return (
      <div className="wrapper">
        {this.props.language == "nl" ? (
          <h1 className="events__title">Lopende evenement(en)</h1>
        ) : null}
        {this.props.language == "en" ? (
          <h1 className="events__title">Ongoing event(s) today</h1>
        ) : null}
        {this.props.language == "fr" ? (
          <h1 className="events__title">Évènement(s) en cours aujourd'hui</h1>
        ) : null}

        <h2 className="date">{today}</h2>
        {(this.props.events && this.props.events.length !== 0)
          ? this.props.events.map((x) => {
              return (
                <EventCard
                  key={x.id}
                  event={x}
                  language={this.props.language}
                />
              );
            })
          : this.props.language == "nl"
          ? "geen evenementen vandaag"
          : this.props.language == "en"
          ? "no events today"
          : this.props.language == "fr"
          ? "Aucun énènement aujourd'hui"
          : ""}

        <style jsx>{`
          div {
            color: white;
            background-color: #003b8b;
            padding: 20px 10px 100px 10px;
          }

          .date {
            font-size: 1.4rem;
            padding: 1rem;
          }

          .wrapper {
            display: flex;
            flex-flow: column;
            align-items: center;
          }

          .events__title {
            font-size: 2rem;
            font-weight: 700;
          }
        `}</style>
      </div>
    );
  }
}

export default HomeEvent;
