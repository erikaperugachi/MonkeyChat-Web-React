export const DELETE_USER_SESSION = 'DELETE_USER_SESSION'
export const ADD_USER_SESSION = 'ADD_USER_SESSION'
export const ADD_USER_CONTACT = 'ADD_USER_CONTACT'
export const ADD_USERS_CONTACT = 'ADD_USERS_CONTACT'

export const ADD_CONVERSATION = 'ADD_CONVERSATION'
export const DELETE_CONVERSATION = 'DELETE_CONVERSATION'
export const ADD_CONVERSATIONS = 'ADD_CONVERSATIONS'
export const REMOVE_CONVERSATIONS = 'REMOVE_CONVERSATIONS'
export const UPDATE_CONVERSATION_STATUS = 'UPDATE_CONVERSATION_STATUS'
export const UPDATE_CONVERSATION_UNREAD_COUNTER = 'UPDATE_CONVERSATION_UNREAD_COUNTER'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const ADD_MESSAGES = 'ADD_MESSAGES'
export const UPDATE_MESSAGE_STATUS = 'UPDATE_MESSAGE_STATUS'
export const UPDATE_MESSAGE_DATA = 'UPDATE_MESSAGE_DATA'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'


// ----------------- USER ----------------- //

export const addUserSession = (user) => {
	return {
		type: ADD_USER_SESSION,
		user: user
	}
}

export const deleteUserSession = () => {
	return {
		type: DELETE_USER_SESSION,
	}
}

export const addUserContact = (user) => {
	return {
		type: ADD_USER_CONTACT,
		user: user
	}
}

export const addUsersContact = (users) => {
	return {
		type: ADD_USERS_CONTACT,
		users: users
	}
}

// ------------- CONVERSATION ------------- //

export const addConversations = (conversations) => {
	return {
		type: ADD_CONVERSATIONS,
		conversations: conversations
	}
}

export const removeConversations = (conversations) => {
	return {
		type: REMOVE_CONVERSATIONS,
	}
}

export const addConversation = (conversation) => {
	return {
		type: ADD_CONVERSATION,
		conversation: conversation
	}
}

export const deleteConversation = (conversation) => {
	return {
		type: DELETE_CONVERSATION,
		conversation: conversation
	}
}

export const updateConversationStatus = (conversation) => {
	return {
		type: UPDATE_CONVERSATION_STATUS,
		conversation: conversation
	}
}

export const updateConversationUnreadCounter = (conversation, unreadCounter) => {
	return {
		type: UPDATE_CONVERSATION_UNREAD_COUNTER,
		conversation: conversation,
		unreadCounter : unreadCounter
	}
}

// --------------- MESSAGE --------------- //

export const addMessage = (message, conversationId, unread) => {
	return {
		type: ADD_MESSAGE,
		message: message,
		conversationId: conversationId,
		unread : unread
	}
}

export const addMessages = (messages, conversationId) => {
	return {
		type: ADD_MESSAGES,
		messages: messages,
		conversationId: conversationId
	}
}

export const updateMessageData = (message, conversationId) => {
	return {
		type: UPDATE_MESSAGE_DATA,
		message: message,
		conversationId: conversationId
	}
}

export const updateMessageStatus = (message, conversationId) => {
	return {
		type: UPDATE_MESSAGE_STATUS,
		message: message,
		conversationId: conversationId
	}
}

export const deleteMessage = (message, conversationId) => {
	return {
		type: DELETE_MESSAGE,
		message: message,
		conversationId: conversationId
	}
}