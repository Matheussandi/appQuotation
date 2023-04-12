import { QuotationStorageDTO } from "../../storage/QuotationStorageDTO";
import { convertDateToString } from "../../utils/convertDateToString";
import { formatAmount } from "../../utils/formatAmount";
import { formatCurrency } from "../../utils/formatCurrency";
import { Container, Description, Amount, Local, Footer, Date } from "./styles";

type Props = {
  data: QuotationStorageDTO;
};

export function TransactionQuotation({ data }: Props) {

  return (
    <Container>
      <Description>{data.product}</Description>

      <Amount>{formatCurrency(data.amount)}</Amount>

      <Footer>
        <Local>{data.quotationPlace}</Local>
        <Date>
          {convertDateToString(data.quoteDate).toLocaleDateString('pt-br')}
        </Date>
      </Footer>
    </Container>
  );
}
