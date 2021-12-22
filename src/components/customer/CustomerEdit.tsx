import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import {add, checkmark, close, pencil} from 'ionicons/icons';
import {useEffect, useState} from 'react';
// import {beer} from 'ionicons/icons';
import { useHistory, useParams } from 'react-router';
import '../../pages/Page.css';
import {saveCustomer, searchCustomers, removeCustomer} from './CustomerApi';

const CustomerEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string; }>();

  const [customer, setCustomer] = useState<any>({});

  const history = useHistory();  

  useEffect(() => {
      search();
      }, []);

  const search = () => {
    // let result = searchCustomers()
      // setClientes(result);
  }

  const save = () => {
    customer.id = Math.round(Math.random() * 100000);
    // debugger;
    saveCustomer(customer);
    history.push('/page/customer');
  }


  const pruebaLocalStorage = () => {
    const ejemplo = {
        id: '1',
        firstname: 'Lucas',
        lastname: 'Moy',
        email: 'lucasmoy@yahoo.com',
        phone: '123123123',
        address: 'Avenida Sempre Viva 123'
    }
    saveCustomer(ejemplo);
  }

  return (
      <IonPage>
      <IonHeader>
      <IonToolbar>
      <IonButtons slot="start">
      <IonMenuButton />
      </IonButtons>
      <IonTitle>{name}</IonTitle>
      </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonCard>
      <IonTitle>{id === 'new' ? 'Salvar Cliente': 'Editar Cliente'}</IonTitle>

          <IonRow>
          <IonCol>
          <IonItem>
            <IonLabel position="stacked">Nome</IonLabel>
            <IonInput onIonChange={e => customer.firstname = e.detail.value} value={customer.firstname}> </IonInput>
          </IonItem>
          </IonCol>


          <IonCol>
          <IonItem>
            <IonLabel position="stacked">Sobrenome</IonLabel>
            <IonInput onIonChange={e => customer.lastname = e.detail.value} value={customer.lastname}> </IonInput>
          </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput onIonChange={e => customer.email = e.detail.value} value={customer.email}> </IonInput>
          </IonItem>
          </IonCol>


          <IonCol>
          <IonItem>
            <IonLabel position="stacked">Endereço</IonLabel>
            <IonInput onIonChange={e => customer.address = e.detail.value} value={customer.address}> </IonInput>
          </IonItem>
          </IonCol>
          </IonRow>

        <IonRow>
          <IonCol>
          <IonItem>
            <IonLabel position="stacked">Telefone</IonLabel>
            <IonInput onIonChange={e => customer.phone = e.detail.value} value={customer.phone}> </IonInput>
          </IonItem>
          </IonCol>
          </IonRow>

      <IonItem>
      <IonButton onClick={save}color="success" fill="solid" slot="end" size="default">
      <IonIcon icon={checkmark} />
      Salvar
      </IonButton>
      </IonItem>
      </IonCard>

      </IonContent>
      </IonPage>
      );
};

export default CustomerEdit;
