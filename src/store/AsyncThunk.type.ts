export interface AsyncThunkStatus {
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  errorMsg?: string;
}
