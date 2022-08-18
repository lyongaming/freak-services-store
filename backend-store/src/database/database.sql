CREATE TABLE invoices (
    invoice_id uuid DEFAULT uuid_generate_v4(),
    user_id uuid,
    services_bought VARCHAR[40] NOT NULL,
    total_amount NUMERIC(5,2) NOT NULL,
    PRIMARY KEY(invoice_id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
);

-- SELECT a.attname
-- FROM   pg_index i
-- JOIN   pg_attribute a ON a.attrelid = i.indrelid
--                      AND a.attnum = ANY(i.indkey)
-- WHERE  i.indrelid = 'users'::regclass
-- AND    i.indisprimary;