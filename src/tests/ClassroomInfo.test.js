import ClassroomInfo from "../bricks/ClassRoomInfo"
import { render, screen } from '@testing-library/react'

const testClassroom = {
    name: "Test Classroom"
}

test("should render ClassroomInfo", () => {
    render(<ClassroomInfo classroom={testClassroom}/>)

    const element = screen.getByTestId("classroom-title")

    expect(element).toBeInTheDocument()
})

test("should render classroom name correctly", () => {
    render(<ClassroomInfo classroom={"classroom-name"} />)

    const nameElement = screen.getByTestId("classroom-name")

    expect(nameElement).toBeInTheDocument()

    expect(nameElement.textContent).toBe(testClassroom.name)
})