import { FullCard } from "../components/card";

function ButtonsPage() {

  return (
    <div className="content-buttons">
      <FullCard
        isButtonAnimated={true}
        colorBackground="green"
        sizeButton="small"
        hasButtonBackground={false}
      />
      <FullCard
        isButtonAnimated={true}
        colorBackground="blue"
        sizeButton="medium"
        hasButtonBackground
      />
      <FullCard
        sizeButton="large"
        hasButtonBackground
      />
      <FullCard
        isButtonAnimated={false}
        colorBackground="green"
        sizeButton="small"
        hasButtonBackground={false}
      />
      <FullCard
        sizeButton="large"
      />
      <FullCard
        isButtonAnimated={true}
        colorBackground="blue"
        sizeButton="large"
        hasButtonBackground
      />
    </div>
  )
}

export default ButtonsPage