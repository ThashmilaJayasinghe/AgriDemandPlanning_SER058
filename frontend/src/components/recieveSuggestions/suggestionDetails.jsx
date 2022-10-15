
export default function SuggestionDetails(props) {
    return (
        <section aria-labelledby="faq-heading" className="bg-white">
            <div className="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-xl">
                    <h2 id="faq-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-base text-gray-500">
                        Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're
                        looking for, you can always{' '}
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            send us an email
                        </a>{' '}
                        with your enquiry.
                    </p>
                </div>

                <div className="max-w-xl">
                    <p className="mt-4 text-base text-gray-500">
                        Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're
                        looking for, you can always send us an email with your enquiry.
                    </p>
                </div>
            </div>
        </section>
    )
}
