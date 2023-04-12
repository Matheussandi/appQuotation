import AsyncStorage from "@react-native-async-storage/async-storage";

import { QuotationStorageDTO } from "../QuotationStorageDTO";

import { QUOTATION_COLLECTION } from "../storageConfig";

export async function quotationGetAll() {
  try {
    const storage = await AsyncStorage.getItem(QUOTATION_COLLECTION)

    const quotation: QuotationStorageDTO[] =
      storage ? JSON.parse(storage) : []

    return quotation

  } catch (error) {
    throw error;
  }
}