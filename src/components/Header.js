import NavTabs from "./NavTabs";


export default function Header({currentPage, handlePageChange}) {
    return(
        <div style={{display: "flex", alignItems: "center", justifyContent:"space-between"}}>
        <h1>Jessica Yun's Portfolio</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>)
}