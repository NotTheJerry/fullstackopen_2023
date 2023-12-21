const Total = ({course}) => {
    const total = course.parts.reduce((ac, cv) => ac + cv.exercises, 0)
    return (
        <div>
            <p><strong> total of {total} exercises </strong></p>
        </div>
    )
}

export default Total