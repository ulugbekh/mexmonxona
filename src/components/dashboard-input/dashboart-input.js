import "./main.scss"



const Input = ({text, placeholder, type, classess, imagesText, inputText, camera, line, inputBlock}) => {
    return ( 
        <div className={inputBlock}>
        <p className="images-text">{imagesText}</p>
            <label className={inputText}>
            <img className='camera' src={line} alt="" />
            {text}
            <input type={type} placeholder={placeholder} className={classess} />
            </label>
            
        </div>
        
     );
}
 
export default Input;