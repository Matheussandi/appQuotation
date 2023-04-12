import { useState } from 'react'
import { Header } from '../../components/Header'
import { Container, Transactions } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Alert, FlatList } from 'react-native'
import { quotationGetAll } from '../../storage/quotation/quotationGetAll'
import { QuotationStorageDTO } from '../../storage/QuotationStorageDTO'
import { TransactionQuotation } from '../../components/TransactionQuotation'

export function SearchQuotation() {
  const [product, setProduct] = useState('')
  const [quotationPlace, setQuotationPlace] = useState('');
  const [dataExpenses, setDataExpenses] = useState<QuotationStorageDTO[]>([])

  async function handleSearchQuotation() {
    if ((product.trim()) === '' && quotationPlace.trim() === '') {
      Alert.alert('Campos Vazios', 'Favor preencha todos os campos.');
      return;
    }

    const data = await quotationGetAll();

    const newData = data.filter(item => item.product.toUpperCase().includes(product.toUpperCase()) && item.quotationPlace.toUpperCase().includes(quotationPlace.toUpperCase()));

    if (newData.length === 0) {
      Alert.alert('Pesquisas de cotação', 'Produto Inexistetnte')
    }

    setDataExpenses(newData);
  }

  return (
    <Container>
      <Header title='Pesquisa de Cotação' />

      <Input
        placeholder='Produto'
        placeholderTextColor='#363F5F'
        value={product}
        onChangeText={value => setProduct(value)}
      />

      <Input
        placeholder='Local'
        placeholderTextColor='#363F5F'
        value={quotationPlace}
        onChangeText={value => setQuotationPlace(value)}
      />

      <Button
        title='Pesquisa'
        onPress={handleSearchQuotation}
      />

      <Transactions>
        <FlatList 
          data={dataExpenses}
          renderItem={({ item }) =>
          <TransactionQuotation data={item}/>
        }
        />
      </Transactions>

    </Container>
  )
}

