import style from "./Description.module.css"

const Description = () => {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.avatar}>
          <img
            src="https://avatars.mds.yandex.net/i?id=b9f61175e689c320cd0ca6a78f09bd6bd7820393-12714516-images-thumbs&n=13"
            alt="avatar"/>
        </div>
        <div>description</div>
      </div>
    </>
  )
}

export default Description