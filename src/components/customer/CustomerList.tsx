import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import {add, close, pencil} from 'ionicons/icons';
import {useEffect, useState} from 'react';
// import {beer} from 'ionicons/icons';
import { useParams } from 'react-router';
import '../../pages/Page.css';
import {saveCustomer, searchCustomers} from './CustomerApi';

const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<any>([]);

  useEffect(() => {
    search();
  }, []);

  const search = () => {
    let result = searchCustomers()
    setClientes(result);
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

        <IonItem>
          <IonButton color="primary" fill="solid" slot="end" size="default">
            <IonIcon icon={add} />
            Incluir Cliente
          </IonButton>
        </IonItem>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonTitle>Gestão de Clientes</IonTitle>
        <IonCard>
          <IonGrid class="table"> 
            <IonRow style={
              {backgroundColor:"#F2F2F2",
                fontweight:"bold"}
            }>
            <IonCol>Nome</IonCol>
            <IonCol>Email</IonCol>
            <IonCol>Telefone</IonCol>
            <IonCol>Endereço</IonCol>
            <IonCol>Ações</IonCol>
          </IonRow>

          {clientes.map((cliente:any) =>
                        <IonRow>
                          <IonCol>{cliente.firstname} {cliente.lastname}</IonCol>
                          <IonCol>{cliente.email}</IonCol>
                          <IonCol>{cliente.phone}</IonCol>
                          <IonCol>{cliente.address}</IonCol>
                          <IonCol>

                            <IonButton color="primary" fill="clear">
                              <IonIcon icon={pencil} slot="icon-only"/>
                            </IonButton>

                            <IonButton color="danger" fill="clear">
                              <IonIcon icon={close} slot="icon-only"/>
                            </IonButton>

                          </IonCol>
                        </IonRow>
                       )}

                      </IonGrid>
                    </IonCard>

                            <IonButton onClick={pruebaLocalStorage} color="danger" fill="clear">
                              Prova Local Storage
                            </IonButton>

                  </IonContent>
                </IonPage>
  );
};

export default CustomerList;
