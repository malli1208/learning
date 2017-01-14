export const SayHello = (text) =>   {
	return {
		type: "Said_Hello",
		payload: text
	}
};