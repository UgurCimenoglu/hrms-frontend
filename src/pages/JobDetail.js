import React from "react";
import { Grid, Card, Button } from "semantic-ui-react";

export default function JobDetail() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={12}>
          <Card fluid>
            <Card.Content>
              <Card.Header>DevOps</Card.Header>
              <Card.Meta>Genel Nitelikler</Card.Meta>
              <Card.Description>
                GENEL NİTELİKLER Edirne Merkez'de bulunan Yapı
                Malzemeleri,Seramik, Mobilya ve Dekorasyon faaliyetleri gösteren
                Şirketimiz de“ Satış Danışmanı” pozisyonunda değerlendirilmek
                üzere; En az önlisans mezunu, Tercihen satış veya pazarlama
                alanında deneyim sahibi, Perakende ürün ve dinamikleri konusunda
                bilgili, Mağazacılık alanında kariyer yapmak isteyen, Müşteri
                odaklı yaklaşımı benimsemiş, maksimum hizmet kalitesini
                sunabilecek, İletişim becerisi gelişmiş, çözüm odaklı, Takım
                çalışmasına uyumlu, Tercihen Bulgarca konuşabilen İŞ TANIMI
                Mağazanın satış hedeflerinin gerçekleşmesinde gerekli özen ve
                desteği sağlayacak. Reyon düzeni, görsel düzenleme, ürün takibi,
                müşteri iletişim ve deneyimi konularında proaktif olarak
                çalışacak. Mağazanın genel düzeninin sağlanması ve hizmet
                kalitesinin karşılanmasında aktif olarak rol alacak. Tercihen
                Bulgarca konuşabilen EKİP ARKADAŞLARI ARAMAKTAYIZ!
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Description>
                <strong>Maaş Aralığı :</strong> 5000-6500
              </Card.Description>
              <Card.Description>
                <strong>Açık Pozisyon Sayısı :</strong> 1
              </Card.Description>
              <Card.Description>
                <strong>Yayınlanma Tarihi :</strong> 01.07.2021
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button floated="right" color="teal">
                Başvur!
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={4}>
          <Card>
            <Card.Content>
              <Card.Header>Code And More</Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                <strong>www.codeandmore.com</strong>
                <hr />
              </Card.Description>
              <Card.Description>
                <strong>codeandmore.gmail.com</strong>
                <hr />
              </Card.Description>
              <Card.Description>
                <strong>0555 555 55 55</strong>{" "}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="blue">
                  Profile Git
                </Button>
                <Button basic color="teal">
                  Google'da Ara
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
