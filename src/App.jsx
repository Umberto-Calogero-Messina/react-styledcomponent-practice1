// import Button from "./components/button/Button";

import Title from './components/title/Title';
import { CARDINFO } from './constants/CardInfo';
import Card from './components/card/Card';
// import Card from './styles/Card';

const App = () => {
  return (
    <div>
      <Title
        title="Reliable, efficient delivery"
        title2="Powered by Technology"
        subtitle="Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful"
      ></Title>
      {CARDINFO.map((card) => (
        <Card
          key={card.id}
          border={card.border}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
    </div>
  );
};

export default App;
