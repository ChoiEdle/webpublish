
// export function MyButton(props) {
//     return (
//         <button type="button" className="mybutton">{props.name}</button>
//     );
// }

export function MyButton({name, type, style}) {   //구조분해할당:구조분해할당할땐 이름이 같아야함
    return (
        <button type={type} className={style}>{name}</button>
    );
}
