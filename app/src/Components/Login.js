import React from "react";
import { withRouter } from "react-router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FacebookLoginButton, TwitterLoginButton, InstagramLoginButton } from "react-social-login-buttons";

import '../CSS/LoginFeature.css'
import ValidatedLoginForm from "./ValidatedLoginForm";

//ステートの値
let state_value = {
    email: 'etaste@aaa.com',
    password: 'etaste0712',
    isLoggedIn: false
}

// 永続化の設定
const persistConfig = {
    key: 'root', // Storageに保存されるキー名を指定する
    storage, // 保存先としてlocalStorageがここで設定される
}

//レデューサー
function changeHeader(state = state_value, action){
    switch(action.type){
        case 'LOGIN':
            return{
                isLoggedIn:true
            };
        case 'NOTLOGIN':
            return{
                isLoggedIn: false
            };
        default:
            return state;
    }
}

// 永続化設定されたReducerとして定義
const persistedReducer = persistReducer(persistConfig, changeHeader)

//ストアの作成
export const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store);

class Login extends React.Component {

    handleToSignUpPage = () => {
        this.props.history.push("/sign-up");
    };
  
    render() {

        return (
            <div className='login-page'>
                <div className='social-login-button'>
                    <FacebookLoginButton size='45px'>
                        <span>Facebookでログイン</span>
                    </FacebookLoginButton >
                    <TwitterLoginButton size='45px'>
                        <span>Twitterでログイン</span>
                    </TwitterLoginButton>
                    <InstagramLoginButton size='45px'>
                        <span>Instagramでログイン</span>
                    </InstagramLoginButton>
                </div>
                <Provider store={store}>
                    <ValidatedLoginForm />
                </Provider>
                <h3>パスワードを忘れた方</h3>
                <h3
                    onClick={ this.handleToSignUpPage }
                >アカウント新規作成</h3>
            </div>
        );
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    };
    
    handleSubmit = event => {
        console.log("Submitting");
        console.log(this.state);
    };
}

//dispatchされるたびに値を確認できる
store.subscribe(() =>
    console.log(store.getState())
)

export default withRouter(Login);
