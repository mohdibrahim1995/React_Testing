import { render, screen } from "@testing-library/react"
import Great from "./great"

test("Great Name Render",()=>{
    render(<Great />)
    const nameElemet=screen.getByText(/Hello/i)
    expect(nameElemet).toBeInTheDocument()
})

test("Great Name Render Correctly",()=>{
    render(<Great name="Ibrahim"/>)
  
    const textElement = screen.getByText(/hello ibrahim/i);
    expect(textElement).toBeInTheDocument();
})
