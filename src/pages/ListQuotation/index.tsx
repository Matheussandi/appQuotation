import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { Header } from "../../components/Header";
import { TransactionQuotation } from "../../components/TransactionQuotation";
import { quotationGetAll } from "../../storage/quotation/quotationGetAll";
import { QuotationStorageDTO } from "../../storage/QuotationStorageDTO";
import { Container, Transactions } from "./styles";

export function ListQuotation() {
  const [dataQuotatin, setListDataQuotation] = useState<QuotationStorageDTO[]>(
    []
  );

  async function loadDataQuotation() {
    const data = await quotationGetAll();

    data.sort((a, b) => {
      return b.quoteDate < a.quoteDate ? -1 : b.quoteDate > a.quoteDate ? 1 : 0;
    });

    setListDataQuotation(data);
  }

  useFocusEffect(
    useCallback(() => {
      loadDataQuotation();
    }, [])
  );

  return (
    <Container>
      <Header title="Listagem de Cotação" />

      <Transactions>
        <FlatList
          data={dataQuotatin}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <TransactionQuotation data={item} />}
        />
      </Transactions>
    </Container>
  );
}
