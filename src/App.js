import { Container, Content, Row } from "./styles"
import Input from "./components/Input"
import Button from "./components/Button"
import { useState } from "react"
import BackspaceIcon from "./assets/imgs/backspace"

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0")
  const [firstNumber, setFirstNumber] = useState("0")
  const [operation, setOperation] = useState("")

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`)
  }

  const handleAllClear = () => {
    setCurrentNumber("0")
    setFirstNumber("0")
    setOperation("")
  }
  const handleClearLastNumber = (number) => {
    setCurrentNumber(number.slice(0, -1))
  }

  const handlePercentageNumbers = (x, opr) => {
    const result = Number(firstNumber) * (Number(x) / 100)
    let sum = 0
    if (opr === "+") {
      sum = Number(firstNumber) + Number(result)
      setCurrentNumber(String(sum))
      setOperation("")
    } else {
      sum = Number(firstNumber) - Number(result)
      setCurrentNumber(String(sum))
      setOperation("")
    }
  }

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber))
      setCurrentNumber("0")
      setOperation("+")
    } else {
      if (currentNumber[currentNumber.length - 1] === "%") {
        handlePercentageNumbers(currentNumber.slice(0, -1), operation)
      } else {
        const sum = Number(firstNumber) + Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation("")
      }
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber))
      setCurrentNumber("0")
      setOperation("-")
    } else {
      if (currentNumber[currentNumber.length - 1] === "%") {
        handlePercentageNumbers(currentNumber.slice(0, -1), operation)
      } else {
        const sum = Number(firstNumber) - Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation("")
      }
    }
  }

  const handleMultNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber))
      setCurrentNumber("0")
      setOperation("x")
    } else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation("")
    }
  }

  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber))
      setCurrentNumber("0")
      setOperation("/")
    } else {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation("")
    }
  }

  const handleEnquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers()
          break
        case "-":
          handleMinusNumbers()
          break
        case "x":
          handleMultNumbers()
          break
        case "/":
          handleDivNumbers()
          break
        default:
          break
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="%" onClick={() => handleAddNumber("%")} />
          <Button label="/" onClick={handleDivNumbers} />
          <Button label="C" onClick={handleAllClear} />
          <Button
            label={BackspaceIcon}
            onClick={() => handleClearLastNumber(currentNumber)}
          />
        </Row>
        <Row>
          <Button label={7} onClick={() => handleAddNumber("7")} />
          <Button label={8} onClick={() => handleAddNumber("8")} />
          <Button label={9} onClick={() => handleAddNumber("9")} />
          <Button label="x" onClick={handleMultNumbers} />
        </Row>
        <Row>
          <Button label={4} onClick={() => handleAddNumber("4")} />
          <Button label={5} onClick={() => handleAddNumber("5")} />
          <Button label={6} onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label={1} onClick={() => handleAddNumber("1")} />
          <Button label={2} onClick={() => handleAddNumber("2")} />
          <Button label={3} onClick={() => handleAddNumber("3")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="." onClick={() => handleAddNumber(".")} />
          <Button label={0} onClick={() => handleAddNumber("0")} />
          <Button label="," onClick={() => handleAddNumber(",")} />
          <Button label="=" onClick={handleEnquals} />
        </Row>
      </Content>
    </Container>
  )
}

export default App
