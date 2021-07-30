import './main.scss'
import Input from '../../components/dashboard-input'
import Line from '../../photo/Line/camera.svg'


const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <h1 className="pages-text">Регистрация</h1>
           <div className="one-block">
           <Input
           inputBlock={'dash-input'}
            classess={'input'}
            inputText={'input-text'}
                text={'тип'}
                placeholder={'К какой из категорий ниже больше всего подходит ваш объект?'}
            />
            <Input
              inputBlock={'dash-input'}
                classess={'input'}
                inputText={'input-text'}
                text={'название'}
                placeholder={'Как называется ваша гостиница??'}
                type={'text'}
            />
           </div>

           <div className="one-block">
           <Input
           inputBlock={'dash-input'}
            classess={'input'}
            inputText={'input-text'}
                text={'звездность'}
                placeholder={'Сколько звезд у вашей гостиницы??'}
                type={'maps'}
            />
            <Input
            inputBlock={'dash-input'}
                classess={'input'}
                inputText={'input-text'}
                text={'адрес'}
                placeholder={'Где находится ваша гостиница?'}
            />
           </div>

           <div className="one-block">
           <Input
           inputBlock={'there-input'}
            classess={'input'}
            inputText={'input-text'}
                text={'номер телефона'}
                placeholder={'Введите номер телефона'}
            />
            <Input
            inputBlock={'there-input'}
                classess={'input'}
                inputText={'input-text'}
                text={'дополнительный номер телефона'}
                placeholder={'Введите дополнительный номер телефона'}
            />
            <Input
            inputBlock={'there-input'}
                classess={'input'}
                inputText={'input-text'}
                text={'Факс'}
                placeholder={'Введите факс'}
            />
           </div>

           <div className="one-block">
           <Input
           inputBlock={'there-input'}
            classess={'input'}
            inputText={'input-text'}
                text={'Email'}
                placeholder={'Введите email'}
            />
            <Input
            inputBlock={'there-input'}
                classess={'input'}
                inputText={'input-text'}
                text={'Email отдела бронирования'}
                placeholder={'Введите email'}
            />
            <Input
            inputBlock={'there-input'}
                classess={'input'}
                inputText={'input-text'}
                text={'ПОЧТОВЫЙ ИНДЕКС'}
                placeholder={'Введите факс'}
            />
           </div>

           <div className="one-block">
           <Input
           inputBlock={'there-input'}
            classess={'input'}
            inputText={'input-text'}
                text={'вРЕМЯ ЗАЕЗДА'}
                placeholder={'Например: 08:00'}
            />
            <Input
            inputBlock={'there-input'}
                classess={'input'}
                inputText={'input-text'}
                text={'Время выезда'}
                placeholder={'Например: 18:00'}
            />
            <Input
            inputBlock={'there-input'}
                classess={'input'}
                inputText={'input-text'}
                text={'форма оплаты'}
                placeholder={'Какие способы оплаты вы принимаете?'}
            />
           </div>
           <div className="one-block">
           <Input
           inputBlock={'one-input'}
            classess={'input'}
            inputText={'input-text'}
                text={'услуги гостиницы'}
                placeholder={'Какие услуги предоставляет ваша гостиница клиентам?'}
            />
           </div>
            <div className="one-block">
            <Input
            inputBlock={'one-input'}
                classess={'input'}
                inputText={'input-text'}
                text={'ближайшие достопримечательности и развлекательные центры'}
                placeholder={'Ближайшие достопримечательности и развлекательные центры '}
            />
            </div>
            <div className="one-block">
            <Input
            inputBlock={'one-input'}
                line={Line}
                camera={'camera'}
                inputText={'input-images'}
                imagesText={'фотогалерея гостиницы'}
                classess={'images'}
                text={'Загрузить фото'}
                placeholder={'Загрузить фото '}
                type={'file'}
            />
            </div>
            <div className="btn-block">
                <button className="cancellation">отменить</button>
                <button className="save">сохранить</button>
            </div>
        </div>
     );
}
 
export default Dashboard;