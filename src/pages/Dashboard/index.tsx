import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { InputAmount } from "../../components/InputAmount";
import { InputDate } from "../../components/InputDate";
import { formatAmount } from "../../utils/formatAmount";
import { convertDate } from "../../utils/converDate";
import { quotationCreate } from "../../storage/quotation/quotationCreate";
import { quotationGetAll } from "../../storage/quotation/quotationGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Dashboard() {
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [quoteDate, setQuoteDate] = useState("");
  const [quotationPlace, setQuotationPlace] = useState("");

  async function handleAddNewQuotation() {
    const data = {
      product,
      amount: formatAmount(amount),
      quoteDate: convertDate(quoteDate),
      quotationPlace,
      created: new Date()
    };


    // Limpar Storage para Android
/*     await AsyncStorage.clear();
    alert('Programa será finalizado');
    return */

    await quotationCreate(data)

    const result = await quotationGetAll()
    console.log('Dados lidos', result)

    setProduct("");
    setAmount("");
    setQuoteDate("");
    setQuotationPlace("");
  }

  return (
    <Container>
      <Header title="Cotação de Valores" />

      <Input
        placeholder="Produto"
        placeholderTextColor="#363F5F"
        value={product}
        onChangeText={(value) => setProduct(value)}
      />

      <InputAmount
        placeholder="Valor"
        placeholderTextColor="#363F5F"
        value={amount}
        onChangeText={(value) => setAmount(value)}
      />

      <InputDate
        placeholder="Data Cotação"
        placeholderTextColor="#363F5F"
        value={quoteDate}
        onChangeText={(value) => setQuoteDate(value)}
      />

      <Input
        placeholder="Local da Cotação"
        placeholderTextColor="#363F5F"
        value={quotationPlace}
        onChangeText={(value) => setQuotationPlace(value)}
      />

      <Button title="Adicionar" onPress={handleAddNewQuotation} />
    </Container>
  );
}
