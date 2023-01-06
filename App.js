import {useState} from 'react'
import {Data} from './Components/Data'
import * as XLSX from 'xlsx'

function App() {

  //on change state
  const [excelFile,setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);

  //submit
  const [excelData,setExcelData]=useState(null);
  //it will contain array of objects

  //handel file
  const fileType=['application/vnd.ms-excel'];
  const handelFile = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      //console.log(selectedFile.type);
      if(selectedFile&&fileType.includes(selectedFile.type)){
         let reader = new FileReader();
         reader.readAsArrayBuffer(selectedFile);
         reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
         }
      }
      else{
           setExcelFileError('Please select only excel file types');
           setExcelFile(null);
      }
    }
    else{
      console.log('plz select tour file');
    }
  }


  //Submit function
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const  worksheet= workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    }
    else{
      setExcelData(null);
    }
  }

  return (
    <div className="Container">

     {/* upload file section*/}
     <div className='form'>
      <form className='form-group' autoComplete='off' 
      onSubmit={handleSubmit}>
        <label><h5>upload Excel file</h5></label>
        <br></br>
        <input type='file' className='form-control' 
        onChange={handelFile} required></input>
        {excelFileError&&<div className='text-danger' 
        style={{marginTop:5+'px'}}>{excelFileError}</div>}
        <button type='submit' className='btn btn-success' 
        style={{marginTop:5+'px'}}>submit</button>
      </form>
     </div>

     <br></br>
     <hr></hr>

     {/* view file section*/}
     <h5>View Excel file</h5>
     <div className='viewer'>
      {excelData===null&&<>No file selected</>}
      {excelData!==null&&(
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Device</th>
                <th scope='col'>t</th>
                <th scope='col'>w</th>
                <th scope='col'>h</th>
                <th scope='col'>p1</th>
                <th scope='col'>p25</th>
                <th scope='col'>p10</th>
              </tr>
            </thead>
            <tbody>
              <Data excelData={excelData}/>
            </tbody>
          </table>
     </div>
      )}
    </div>
    </div>
  );
}  
export default App;
