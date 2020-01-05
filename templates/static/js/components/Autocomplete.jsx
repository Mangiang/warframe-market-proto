import React, {Fragment, useEffect, useRef, useState} from "react";
import '../../../public/css/Autocomplete.css';

const Autocomplete = (props) => {
    const [suggestionsState, setSuggestionsState] = useState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: ""
    });
    const inputField = useRef(null);

    useEffect(() => {

        inputField.current.focus();
    }, []);

    const onChange = e => {
        const {suggestions} = props;
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        setSuggestionsState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });

    };

    const onClick = e => {
        setSuggestionsState({
            ...suggestionsState,
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ''
        });
        props.onSubmit(e.currentTarget.innerText.trim());
    };

    const onKeyDown = e => {
        const activeSuggestion = suggestionsState.activeSuggestion;
        const filteredSuggestions = suggestionsState.filteredSuggestions;

        // User pressed the enter key, update the input and close the
        // suggestions
        if (e.keyCode === 13) {
            setSuggestionsState({
                ...suggestionsState,
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: ''
            });
            props.onSubmit(filteredSuggestions[activeSuggestion].trim());
        }
        // User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            setSuggestionsState({...suggestionsState, activeSuggestion: activeSuggestion - 1});
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            setSuggestionsState({...suggestionsState, activeSuggestion: activeSuggestion + 1});
        }
    };

    const onFocusOut = (event) => {
        if (event.relatedTarget === null) {
            setSuggestionsState({
                ...suggestionsState,
                activeSuggestion: 0,
                showSuggestions: false,
            });
        }
    };

    const onFocus = (e) => {
        onChange(e);
    };

    const render = () => {
        if (suggestionsState.showSuggestions && suggestionsState.userInput) {
            if (suggestionsState.filteredSuggestions.length) {
                return (
                    <ul className="suggestions">
                        {suggestionsState.filteredSuggestions.map((suggestion, index) => {
                            let className;

                            if (props.exclude.indexOf(suggestion.trim()) !== -1)
                                return;

                            // Flag the active suggestion with a class
                            if (index === suggestionsState.activeSuggestion) {
                                className = "suggestion-active";
                            }

                            return (
                                <li
                                    className={className}
                                    key={suggestion}
                                    onClick={onClick}
                                    tabIndex="0"
                                >
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                return (
                    <div className="no-suggestions">
                        <em>No suggestions, you're on your own!</em>
                    </div>
                );
            }
        }

    };


    return (
        <Fragment>
            <input
                ref={inputField}
                type="text"
                placeholder={"Relic Name"}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onFocus={onFocus}
                onBlur={onFocusOut}
                value={suggestionsState.userInput}
            />
            {render()}
        </Fragment>
    );
};

export default Autocomplete;
