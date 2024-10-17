export type Result<T> = 
    | {
        succeess: true,
        data: T
      }
    | {
        success: false,
        error: {
            code: string
            message: string
        }
      }