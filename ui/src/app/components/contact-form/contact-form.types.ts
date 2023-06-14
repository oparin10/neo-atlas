const FormSubmissionEvent = { SUCCESS: 'success', ERROR: 'error' } as const;

type FormSubmissionFailure = {
  type: typeof FormSubmissionEvent.ERROR;
  error: any;
};

type FormSubmissionSuccess = {
  type: typeof FormSubmissionEvent.SUCCESS;
  response: Object;
};

export type FormSubmissionResult =
  | FormSubmissionFailure
  | FormSubmissionSuccess;
