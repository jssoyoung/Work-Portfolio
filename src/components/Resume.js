import resume from "../Assets/resume.pdf"
export default function Resume() {
    return(
    <div className="w-100">
        <object aria-label="pdf resume" width="95%" height="800" data={resume} type="application/pdf" />
    </div>
    )
}