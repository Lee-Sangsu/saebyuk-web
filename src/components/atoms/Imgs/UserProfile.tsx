export const UserProfile = () => {
    const profileImg:any = window.sessionStorage.getItem("profile_img");
    const profileImgStyle: object = {  
        objectFit: 'cover',
        marginRight: '20px',
        borderRadius: '10px'
    };

    return (
    <>
        {profileImg === "" ?
        <> 
        <img alt="프로필" src={require('assets/default-profile.png').default} style={{
            ...profileImgStyle,
            border: '2px solid black',
            padding: '8px',
            width: '35px',
            height: '35px'
        }} />
        </>
        :
        <> 
         <img alt="프로필" src={profileImg} style={{
             ...profileImgStyle,
             width: '55px',
            height: '55px',
            borderWidth: 0
         }} />
         </>
        }
    </>
    )
}