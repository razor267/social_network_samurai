import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import {required} from "../../../utils/validators/validators";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
}
type PropsTypeKeys = GetStringKeys<ProfileType>;

const ProfileDataForm:React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Full name:</b> {createField<PropsTypeKeys>("Fullname", "fullName", [required], Input)}
        </div>
        <div>
            <b>Looking for a job:</b> {createField<PropsTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills:</b> {createField<PropsTypeKeys>("Description", "lookingForAJobDescription", [required], Textarea)}
        </div>
        <div>
            <b>About me:</b> {createField<PropsTypeKeys>("About me", "aboutMe", [required], Textarea)}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}:</b> {createField(key, "contacts." + key, [], Input)}
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;