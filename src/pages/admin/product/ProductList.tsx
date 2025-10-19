import { EditOutlined, EyeInvisibleOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { Badge, Button, Image, Popconfirm, Space, Tag, Typography } from 'antd';
import type { TableProps } from 'antd/es/table';
import { Link } from 'react-router';
import { IProductAdmin, ProductVariant } from '~/@types/product';
import CommonTable from '~/components/CommonTable';
import WrapperContent from '~/components/WrapperContent';
import { useGetAllForAdminProducts } from '~/hooks/apis/product';
import useTable from '~/hooks/useTable';

const { Text, Paragraph } = Typography;

export default function ProductList() {
    const { query, onSelectPaginateChange, onFilter, getColumnSearchProps, getFilteredValue } =
        useTable<IProductAdmin>();
    const { data, isFetching } = useGetAllForAdminProducts(query);

    const handleToggleVisibility = (productId: string, currentHideStatus: boolean) => {
        console.log('Toggle visibility:', productId, !currentHideStatus);
    };

    const handleEdit = (productId: string) => {
        console.log('Edit product:', productId);
    };

    const columns: TableProps<IProductAdmin>['columns'] = [
        {
            title: 'Sản phẩm',
            dataIndex: 'name',
            key: 'name',
            width: 300,
            ...getColumnSearchProps('name'),
            render: (name: string, record: IProductAdmin) => (
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Image
                        src={record.thumbnail || record.thumbnailUrlRef}
                        alt={name}
                        width={60}
                        height={60}
                        style={{ objectFit: 'cover', borderRadius: '4px' }}
                        preview={false}
                    />
                    <div style={{ flex: 1 }}>
                        <Text strong>{name}</Text>
                        <br />
                        <Text type='secondary' style={{ fontSize: '12px' }}>
                            {record.parentSku}
                        </Text>
                    </div>
                </div>
            ),
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            width: 200,
            render: (description: string) => (
                <Paragraph ellipsis={{ rows: 2, expandable: false }} style={{ margin: 0 }}>
                    {description || 'Chưa có mô tả'}
                </Paragraph>
            ),
        },
        {
            title: 'Thương hiệu',
            dataIndex: 'brandId',
            key: 'brandId',
            width: 150,
            filteredValue: getFilteredValue('brandId'),
            filters: [],
            render: (brand) => brand?.name || 'N/A',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'isHide',
            key: 'isHide',
            align: 'center',
            width: 120,
            filteredValue: getFilteredValue('isHide'),
            filters: [
                { text: 'Sản phẩm đang ẩn', value: true },
                { text: 'Sản phẩm đang hiện', value: false },
            ],
            render: (isHide: boolean) => <Tag color={isHide ? 'red' : 'green'}>{isHide ? 'Ẩn' : 'Hiện'}</Tag>,
        },
        {
            title: 'Số biến thể',
            dataIndex: 'variationIds',
            key: 'variationIds',
            width: 100,
            align: 'center',
            render: (variations) => <Badge count={variations?.length || 0} showZero />,
        },
        {
            title: 'Hành động',
            key: 'action',
            align: 'center',
            fixed: 'right',
            render: (_, record: IProductAdmin) => (
                <Space size='small' direction='vertical'>
                    <Popconfirm
                        title={record.isHide ? 'Hiện sản phẩm' : 'Ẩn sản phẩm'}
                        description={
                            record.isHide
                                ? 'Bạn có chắc chắn muốn hiện sản phẩm này không?'
                                : 'Bạn có chắc chắn muốn ẩn sản phẩm này không?'
                        }
                        onConfirm={() => handleToggleVisibility(record._id, record.isHide)}
                        okText='Đồng ý'
                        cancelText='Hủy'
                    >
                        <Button
                            className='w-full'
                            type='primary'
                            size='small'
                            icon={record.isHide ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            title={record.isHide ? 'Hiện sản phẩm' : 'Ẩn sản phẩm'}
                        >
                            {record.isHide ? 'Hiện' : 'Ẩn'}
                        </Button>
                    </Popconfirm>
                    <Button
                        className='w-full'
                        type='default'
                        size='small'
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record._id)}
                        title='Cập nhật sản phẩm'
                    >
                        Sửa
                    </Button>
                </Space>
            ),
        },
    ];

    const expandedRowRender = (record: IProductAdmin) => {
        const variantColumns: TableProps<ProductVariant>['columns'] = [
            {
                title: 'Biến thể',
                dataIndex: 'sku',
                key: 'sku',
                render: (sku: string, variant) => (
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <Image
                            src={variant.image || variant.imageUrlRef}
                            alt={sku}
                            width={40}
                            height={40}
                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                            preview={false}
                        />
                        <Text>{sku}</Text>
                    </div>
                ),
            },
            {
                title: 'Số lượng',
                dataIndex: 'quantity',
                key: 'quantity',
                align: 'center',
            },
            {
                title: 'Đã bán',
                dataIndex: 'sold',
                key: 'sold',
                align: 'center',
            },
            {
                title: 'Tồn kho',
                key: 'stock',
                align: 'center',
                render: (variant) => variant.quantity - variant.sold,
            },
            {
                title: 'Trạng thái',
                dataIndex: 'isActive',
                key: 'isActive',
                render: (isActive: boolean) => (
                    <Tag color={isActive ? 'green' : 'red'}>{isActive ? 'Đã công khai' : 'Đã ẩn'}</Tag>
                ),
            },
            {
                title: 'Đơn giá',
                dataIndex: 'price',
                key: 'price',
                align: 'right',
                render: (price: number) => `${price.toLocaleString('vi-VN')} ₫`,
            },
        ];

        return (
            <div className='border-primary mx-4 my-2 rounded-2xl border-l-8'>
                <CommonTable
                    columns={variantColumns}
                    dataSource={record.variationIds}
                    pagination={false}
                    rowKey='_id'
                    paging={false}
                    bordered={false}
                />
            </div>
        );
    };

    return (
        <WrapperContent
            title='Danh sách sản phẩm'
            toolbar={
                <Link to='/admin/products/form'>
                    <Button icon={<PlusOutlined />}>Thêm mới</Button>
                </Link>
            }
        >
            <CommonTable<IProductAdmin>
                columns={columns}
                onSelectPaginateChange={onSelectPaginateChange}
                onFilter={onFilter}
                currentPage={data?.meta.page}
                totalDocs={data?.meta.totalDocs}
                rank
                dataSource={data?.data}
                expandable={{
                    expandedRowRender,
                    rowExpandable: (record) => (record.variationIds?.length || 0) > 0,
                }}
                rowKey='_id'
                loading={isFetching}
            />
        </WrapperContent>
    );
}
