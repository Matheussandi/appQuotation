import AsyncStorage from '@react-native-async-storage/async-storage'
import { QuotationStorageDTO } from '../QuotationStorageDTO';
import { QUOTATION_COLLECTION } from '../storageConfig';
import { quotationGetAll } from './quotationGetAll';

export async function quotationCreate(newQuotation: QuotationStorageDTO) {
  try {
    const storageQuotation = await quotationGetAll()

    const storage = [...storageQuotation, newQuotation]

    await AsyncStorage.setItem(QUOTATION_COLLECTION,
      JSON.stringify(storage))
  } catch (error) {
    throw error;
  }

}