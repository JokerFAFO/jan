/**
 * Message Request and Response
 * ============================
 * */

/**
 * The role of the author of this message.
 * @data_transfer_object
 */
export enum ChatCompletionRole {
  System = "system",
  Assistant = "assistant",
  User = "user",
}

/**
 * The `MessageRequest` type defines the shape of a new message request object.
 * @data_transfer_object
 */
export type ChatCompletionMessage = {
  /** The contents of the message. **/
  content?: string;
  /** The role of the author of this message. **/
  role: ChatCompletionRole;
};

/**
 * The `MessageRequest` type defines the shape of a new message request object.
 * @data_transfer_object
 */
export type MessageRequest = {
  id?: string;
  /** The thread id of the message request. **/
  threadId?: string;
  /** Messages for constructing a chat completion request **/
  messages?: ChatCompletionMessage[];
};

/**
 * Thread and Message
 * ========================
 * */

/**
 * The status of the message.
 * @data_transfer_object
 */
export enum MessageStatus {
  /** Message is fully loaded. **/
  Ready = "ready",
  /** Message is not fully loaded. **/
  Pending = "pending",
}
/**
 * The `ThreadMessage` type defines the shape of a thread's message object.
 * @stored
 */
export type ThreadMessage = {
  /** Unique identifier for the message, generated by default using the ULID method. **/
  id?: string;
  /** Thread id, default is a ulid. **/
  threadId?: string;
  /** The role of the author of this message. **/
  role?: ChatCompletionRole;
  /** The content of this message. **/
  content?: string;
  /** The status of this message. **/
  status: MessageStatus;
  /** The timestamp indicating when this message was created, represented in ISO 8601 format. **/
  createdAt?: string;
};

/**
 * The `Thread` type defines the shape of a thread object.
 * @stored
 */
export interface Thread {
  /** Unique identifier for the thread, generated by default using the ULID method. **/
  id: string;
  /** The summary of this thread. **/
  summary?: string;
  /** The messages of this thread. **/
  messages: ThreadMessage[];
  /** The timestamp indicating when this thread was created, represented in ISO 8601 format. **/
  createdAt?: string;
  /** The timestamp indicating when this thread was updated, represented in ISO 8601 format. **/
  updatedAt?: string;

  /**
   * @deprecated This field is deprecated and should not be used.
   * Read from model file instead.
   */
  modelId?: string;
}

/**
 * Model type defines the shape of a model object.
 * @stored
 */
export interface Model {
  /** Combination of owner and model name.*/
  id: string;
  /** The name of the model.*/
  name: string;
  /** Quantization method name.*/
  quantizationName: string;
  /** The the number of bits represents a number.*/
  bits: number;
  /** The size of the model file in bytes.*/
  size: number;
  /** The maximum RAM required to run the model in bytes.*/
  maxRamRequired: number;
  /** The use case of the model.*/
  usecase: string;
  /** The download link of the model.*/
  downloadLink: string;
  /** The short description of the model.*/
  shortDescription: string;
  /** The long description of the model.*/
  longDescription: string;
  /** The avatar url of the model.*/
  avatarUrl: string;
  /** The author name of the model.*/
  author: string;
  /** The version of the model.*/
  version: string;
  /** The origin url of the model repo.*/
  modelUrl: string;
  /** The timestamp indicating when this model was released.*/
  releaseDate: number;
  /** The tags attached to the model description */
  tags: string[];
}

/**
 * Model type of the presentation object which will be presented to the user
 * @data_transfer_object
 */
export interface ModelCatalog {
  /** The unique id of the model.*/
  id: string;
  /** The name of the model.*/
  name: string;
  /** The avatar url of the model.*/
  avatarUrl: string;
  /** The short description of the model.*/
  shortDescription: string;
  /** The long description of the model.*/
  longDescription: string;
  /** The author name of the model.*/
  author: string;
  /** The version of the model.*/
  version: string;
  /** The origin url of the model repo.*/
  modelUrl: string;
  /** The timestamp indicating when this model was released.*/
  releaseDate: number;
  /** The tags attached to the model description **/
  tags: string[];

  /** The available versions of this model to download. */
  availableVersions: ModelVersion[];
}
/**
 * Model type which will be present a version of ModelCatalog
 * @data_transfer_object
 */
export type ModelVersion = {
  /** The name of this model version.*/
  name: string;
  /** The quantization method name.*/
  quantizationName: string;
  /** The the number of bits represents a number.*/
  bits: number;
  /** The size of the model file in bytes.*/
  size: number;
  /** The maximum RAM required to run the model in bytes.*/
  maxRamRequired: number;
  /** The use case of the model.*/
  usecase: string;
  /** The download link of the model.*/
  downloadLink: string;
};